import { useState } from "react";
import { mutate, useDemo } from "./store";

/* eslint-disable @typescript-eslint/no-explicit-any */

export type DCProps = Record<string, any>;
type State = Record<string, any>;
type Patch = State | ((prev: State) => State);

/**
 * Base class for a screen's UI state. A screen subclasses it, seeds
 * `this.state` in its constructor and returns everything its markup reads
 * from `renderVals()` (values, lists and click handlers).
 */
export class DCLogic {
  props: DCProps;
  state: State = {};

  constructor(props: DCProps = {}) {
    this.props = props;
  }

  setState(patch: Patch): void {
    void patch;
  }

  renderVals(): Record<string, any> {
    return {};
  }
}

type Options = {
  /** Values handed to the logic as `this.props` (store data, actions). */
  props?: DCProps;
  /** Keep this screen's UI state in the demo store under this key. */
  persist?: string;
  /**
   * Like `persist`, but changes stay a local draft until the logic calls
   * `this.props.commit()`; `this.props.discard()` drops them.
   */
  draft?: string;
};

/** Runs a DCLogic class as React state and returns its render values. */
export function useLogic(Ctor: new (props: DCProps) => DCLogic, { props = {}, persist, draft }: Options = {}) {
  const [local, setLocal] = useState<State>(() => (draft ? {} : new Ctor(props).state));
  const demo = useDemo();
  const logic = new Ctor(props);
  const merge = (prev: State, patch: Patch) => ({ ...prev, ...(typeof patch === "function" ? patch(prev) : patch) });

  if (draft) {
    const current = { ...logic.state, ...demo.ui[draft], ...local };
    logic.state = current;
    logic.setState = (patch) => setLocal((prev) => merge(prev, typeof patch === "function" ? patch(current) : patch));
    logic.props = {
      ...props,
      dirty: Object.keys(local).length > 0,
      commit: () => {
        mutate((d) => {
          d.ui[draft] = current;
        });
        setLocal({});
      },
      discard: () => setLocal({}),
    };
  } else if (persist) {
    logic.state = { ...logic.state, ...demo.ui[persist] };
    const current = logic.state;
    logic.setState = (patch) =>
      mutate((d) => {
        d.ui[persist] = merge({ ...current, ...d.ui[persist] }, patch);
      });
  } else {
    logic.state = local;
    logic.setState = (patch) => setLocal((prev) => merge(prev, patch));
  }
  return logic.renderVals();
}

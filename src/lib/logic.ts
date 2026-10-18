import { useState } from "react";

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

/** Runs a DCLogic class as React state and returns its render values. */
export function useLogic(Ctor: new (props: DCProps) => DCLogic) {
  const [state, setState] = useState<State>(() => new Ctor({}).state);
  const logic = new Ctor({});
  logic.state = state;
  logic.setState = (patch) => setState((prev) => ({ ...prev, ...(typeof patch === "function" ? patch(prev) : patch) }));
  return logic.renderVals();
}

import { Component, Show } from "solid-js";
import { useAppState } from "../../state/StateProvider";
import { Operation, Update as UpdateType, UpdateStatus } from "../../types";
import {
  combineClasses,
  readableMonitorTimestamp,
  readableVersion,
} from "../../util/helpers";
import Icon from "../shared/Icon";
import Flex from "../shared/layout/Flex";
import Grid from "../shared/layout/Grid";
import s from "./update.module.scss";

const Update: Component<{ update: UpdateType; openMenu: () => void }> = (p) => {
  const { usernames } = useAppState();
  const operation = () => {
    if (p.update.operation === Operation.BuildBuild) {
      return `build ${readableVersion(p.update.version!)}`;
    }
    return `${p.update.operation.replaceAll("_", " ")}${
      p.update.version ? " " + readableVersion(p.update.version) : ""
    }`;
  };
  return (
    <Grid gap="0.25rem" class={combineClasses(s.Update, "shadow")}>
      <Flex gap="0.5rem">
        <div
          style={{
            color: !p.update.success ? "rgb(182, 47, 52)" : "inherit",
          }}
        >
          {operation()}
        </div>
        <Show when={p.update.status === UpdateStatus.InProgress}>
          <div style={{ opacity: 0.7 }}>(in progress)</div>
        </Show>
      </Flex>
      <div style={{ "place-self": "start end" }}>
        {readableMonitorTimestamp(p.update.start_ts)}
      </div>
      <Flex gap="0.5rem" alignItems="center">
        <Icon type="user" />
        <div>{usernames.get(p.update.operator)}</div>
      </Flex>
      <button class="blue" style={{ "place-self": "center end" }} onClick={p.openMenu}>
        <Icon type="console" />
      </button>
    </Grid>
  );
};

export default Update;

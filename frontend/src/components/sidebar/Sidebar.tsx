import { Component, For, Show } from "solid-js";
import { useAppDimensions } from "../../state/DimensionProvider";
import { useAppState } from "../../state/StateProvider";
import { useUser } from "../../state/UserProvider";
import { combineClasses, inPx } from "../../util/helpers";
import AddServer from "./AddServer";
import { TOPBAR_HEIGHT } from "../topbar/Topbar";
import Grid from "../util/layout/Grid";
import Tabs from "../util/tabs/Tabs";
import Builds from "./builds/Builds";
import Server from "./server/Server";
import s from "./sidebar.module.scss";

const Sidebar: Component<{}> = () => {
  const { sidebar, servers, selected } = useAppState();
  const { height } = useAppDimensions();
  const { permissions } = useUser();
  return (
    <Show when={servers.loaded() && sidebar.open()}>
      <Tabs
        containerClass={combineClasses(s.Sidebar, "shadow")}
        localStorageKey="sidebar-tab"
        tabsGap="0rem"
        tabs={[
          {
            title: "deployments",
            element: (
              <Grid
                class={combineClasses(s.DeploymentsTabContent, "scroller")}
                style={{
                  "max-height": inPx(height() - TOPBAR_HEIGHT - 80),
                }}
              >
                <For each={servers.ids()}>{(id) => <Server id={id} />}</For>
                <Show when={permissions() > 1}>
                  <AddServer />
                </Show>
              </Grid>
            ),
          },
          {
            title: "builds",
            element: (
              <Grid
                class="scroller"
                style={{
                  height: "fit-content",
                  "max-height": inPx(height() - TOPBAR_HEIGHT - 120),
                  padding: "0rem 1rem",
                }}
              >
                <Builds />
              </Grid>
            ),
          },
        ]}
      />
    </Show>
  );
};

export default Sidebar;

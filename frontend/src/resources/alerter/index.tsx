import { ResourceUpdates } from "@components/updates/resource";
import { useRead, useWrite } from "@hooks";
import { Resource } from "@layouts/resource";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AlerterName = ({ id }: { id: string }) => {
  const alerters = useRead("ListAlerters", {}).data;
  const alerter = alerters?.find((a) => a._id?.$oid === id);
  if (!alerter) return null;
  return <>{alerter.name}</>;
};

const AlerterInfo = ({ id }: { id: string }) => {
  const alerters = useRead("ListAlerters", {}).data;
  const alerter = alerters?.find((a) => a._id?.$oid === id);
  if (!alerter) return null;
  return <>some description</>;
};

export const Alerter = () => {
  const id = useParams().alerterId;
  const push = useWrite("PushRecentlyViewed").mutate;

  if (!id) return null;
  useEffect(() => {
    push({ resource: { type: "Deployment", id } });
  }, []);

  return (
    <Resource
      title={<AlerterName id={id} />}
      info={<AlerterInfo id={id} />}
      actions={<></>}
    >
      <ResourceUpdates type="Alerter" id={id} />
    </Resource>
  );
};

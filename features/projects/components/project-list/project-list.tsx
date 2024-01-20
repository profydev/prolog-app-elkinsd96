import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { Loader } from "../loader/loader";
import { Alert } from "../alert/alert";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Alert
        error={error}
        message="There was a problem while loading the project data"
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

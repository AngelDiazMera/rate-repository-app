import { useQuery } from '@apollo/client';
import { Repository } from '../data/repositories';
import { GetRepositoriesGqlQuery } from '../graphQl/queries';

export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GetRepositoriesGqlQuery);
  const { repositories = null } = data;

  const repositoriesNodes: Repository[] = repositories 
    ? repositories.edges.map((edge: { node: Repository }) => edge.node)
    : []

  return {
    repositories: repositoriesNodes,
    loading, fetch
  }
};

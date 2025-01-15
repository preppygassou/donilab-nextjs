import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/services/api'

export function useSites() {
  return useQuery({
    queryKey: ['sites'],
    queryFn: async () => {
      const { data } = await api.get('/sites');
      return data;
    },
  });
}

export function useSite(id: string) {
  return useQuery({
    queryKey: ['sites', id],
    queryFn: async () => {
      const { data } = await api.get(`/sites/${id}`);
      return data;
    },
    enabled: !!id,
  });
}


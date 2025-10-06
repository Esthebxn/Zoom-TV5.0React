import axios from 'axios';

// Configuración de la API
const API_BASE_URL = 'https://api-zoomtv.onrender.com/api';

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API para noticias
export const newsApi = {
  // Obtener todas las noticias
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.page) params.append('page', filters.page);
      if (filters.category) params.append('category', filters.category);
      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);

      const response = await apiClient.get(`/noticias?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  // Obtener noticia por ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/noticias/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news by ID:', error);
      throw error;
    }
  },

  // Obtener noticias por categoría
  getByCategory: async (category, filters = {}) => {
    try {
      const params = new URLSearchParams();
      params.append('category', category);
      if (filters.page) params.append('page', filters.page);
      if (filters.search) params.append('search', filters.search);

      const response = await apiClient.get(`/noticias?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news by category:', error);
      throw error;
    }
  },

  // Obtener noticias destacadas
  getFeatured: async () => {
    try {
      const params = new URLSearchParams();
      params.append('featured', 'true');

      const response = await apiClient.get(`/noticias?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured news:', error);
      throw error;
    }
  }
};

// API para horario
export const horarioApi = {
  // Obtener todo el horario
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.day) params.append('day', filters.day);
      if (filters.category) params.append('category', filters.category);
      if (filters.type) params.append('type', filters.type);
      if (filters.isActive !== undefined) params.append('isActive', filters.isActive.toString());
      if (filters.search) params.append('search', filters.search);

      const response = await apiClient.get(`/horario?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching horario:', error);
      throw error;
    }
  },

  // Obtener horario semanal
  getWeekly: async () => {
    try {
      const response = await apiClient.get('/horario/weekly');
      return response.data;
    } catch (error) {
      console.error('Error fetching weekly horario:', error);
      throw error;
    }
  },

  // Obtener programa por ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/horario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching programa by ID:', error);
      throw error;
    }
  },

  // Obtener programas por día
  getByDay: async (day) => {
    try {
      const response = await apiClient.get(`/horario/day/${day}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching horario by day:', error);
      throw error;
    }
  }
};

// API para anunciantes
export const anunciantesApi = {
  // Obtener todos los anunciantes
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.category) params.append('category', filters.category);

      const response = await apiClient.get(`/anunciantes?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching anunciantes:', error);
      throw error;
    }
  },

  // Obtener anunciante por ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/anunciantes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching anunciante by ID:', error);
      throw error;
    }
  },

  // Crear nuevo anunciante
  create: async (anuncianteData) => {
    try {
      const response = await apiClient.post('/anunciantes', anuncianteData);
      return response.data;
    } catch (error) {
      console.error('Error creating anunciante:', error);
      throw error;
    }
  },

  // Actualizar anunciante
  update: async (id, anuncianteData) => {
    try {
      const response = await apiClient.put(`/anunciantes/${id}`, anuncianteData);
      return response.data;
    } catch (error) {
      console.error('Error updating anunciante:', error);
      throw error;
    }
  },

  // Eliminar anunciante
  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/anunciantes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting anunciante:', error);
      throw error;
    }
  },

  // Cambiar estado del anunciante
  updateStatus: async (id, status) => {
    try {
      const response = await apiClient.put(`/anunciantes/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating anunciante status:', error);
      throw error;
    }
  },

  // Reordenar anunciantes
  reorder: async (anunciantes) => {
    try {
      const response = await apiClient.put('/anunciantes/reorder', { anunciantes });
      return response.data;
    } catch (error) {
      console.error('Error reordering anunciantes:', error);
      throw error;
    }
  }
};

// API para información de la empresa
export const companyApi = {
  // Información de la empresa
  getInfo: async () => {
    try {
      const response = await apiClient.get('/company/info');
      return response.data;
    } catch (error) {
      console.error('Error fetching company info:', error);
      throw error;
    }
  },

  updateInfo: async (data) => {
    try {
      const response = await apiClient.put('/company/info', data);
      return response.data;
    } catch (error) {
      console.error('Error updating company info:', error);
      throw error;
    }
  },

  // Miembros del equipo
  getTeam: async () => {
    try {
      const response = await apiClient.get('/company/team');
      return response.data;
    } catch (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }
  },

  getTeamMember: async (id) => {
    try {
      const response = await apiClient.get(`/company/team/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching team member:', error);
      throw error;
    }
  },

  createTeamMember: async (data) => {
    try {
      const response = await apiClient.post('/company/team', data);
      return response.data;
    } catch (error) {
      console.error('Error creating team member:', error);
      throw error;
    }
  },

  updateTeamMember: async (id, data) => {
    try {
      const response = await apiClient.put(`/company/team/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  },

  deleteTeamMember: async (id) => {
    try {
      const response = await apiClient.delete(`/company/team/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  },

  // Historia de la empresa
  getHistory: async () => {
    try {
      const response = await apiClient.get('/company/history');
      return response.data;
    } catch (error) {
      console.error('Error fetching company history:', error);
      throw error;
    }
  },

  updateHistory: async (data) => {
    try {
      const response = await apiClient.put('/company/history', data);
      return response.data;
    } catch (error) {
      console.error('Error updating company history:', error);
      throw error;
    }
  },

  // Valores de la empresa
  getValues: async () => {
    try {
      const response = await apiClient.get('/company/values');
      return response.data;
    } catch (error) {
      console.error('Error fetching company values:', error);
      throw error;
    }
  },

  updateValues: async (data) => {
    try {
      const response = await apiClient.put('/company/values', data);
      return response.data;
    } catch (error) {
      console.error('Error updating company values:', error);
      throw error;
    }
  }
};

// API para URL Live
export const urlLiveApi = {
  // Obtener todas las URLs live
  getAll: async () => {
    try {
      const response = await apiClient.get('/urlLive');
      return response.data;
    } catch (error) {
      console.error('Error obteniendo URLs live:', error);
      throw error;
    }
  },

  // Obtener URL live activa
  getLive: async () => {
    try {
      const response = await apiClient.get('/urlLive/live');
      return response.data;
    } catch (error) {
      console.error('Error fetching live URL:', error);
      throw error;
    }
  },

  // Obtener URL live por ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/urlLive/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching URL live by ID:', error);
      throw error;
    }
  },

  // Crear nueva URL live
  create: async (urlLiveData) => {
    try {
      const response = await apiClient.post('/urlLive', urlLiveData);
      return response.data;
    } catch (error) {
      console.error('Error creating URL live:', error);
      throw error;
    }
  },

  // Actualizar URL live
  update: async (id, urlLiveData) => {
    try {
      const response = await apiClient.put(`/urlLive/${id}`, urlLiveData);
      return response.data;
    } catch (error) {
      console.error('Error updating URL live:', error);
      throw error;
    }
  },

  // Activar URL live
  activate: async (id) => {
    try {
      const response = await apiClient.put(`/urlLive/${id}/live`);
      return response.data;
    } catch (error) {
      console.error('Error activating URL live:', error);
      throw error;
    }
  },

  // Detener URL live
  stop: async (id) => {
    try {
      const response = await apiClient.put(`/urlLive/${id}/stop`);
      return response.data;
    } catch (error) {
      console.error('Error stopping URL live:', error);
      throw error;
    }
  },

  // Eliminar URL live
  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/urlLive/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting URL live:', error);
      throw error;
    }
  }
};

export default apiClient;

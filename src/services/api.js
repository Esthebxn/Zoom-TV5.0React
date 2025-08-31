import axios from 'axios';

// Configuración de la API
const API_BASE_URL = 'https://apizoomtv-production.up.railway.app/api';

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
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
      if (filters.limit) params.append('limit', filters.limit);
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
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.search) params.append('search', filters.search);

      const response = await apiClient.get(`/noticias?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news by category:', error);
      throw error;
    }
  },

  // Obtener noticias destacadas
  getFeatured: async (limit = 5) => {
    try {
      const params = new URLSearchParams();
      params.append('limit', limit);
      params.append('featured', 'true');

      const response = await apiClient.get(`/noticias?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured news:', error);
      throw error;
    }
  }
};

// API para programación
export const programmingApi = {
  // Obtener toda la programación
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.day) params.append('day', filters.day);
      if (filters.category) params.append('category', filters.category);
      if (filters.type) params.append('type', filters.type);
      if (filters.isActive !== undefined) params.append('isActive', filters.isActive.toString());
      if (filters.search) params.append('search', filters.search);

      const response = await apiClient.get(`/programacion?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching programming:', error);
      throw error;
    }
  },

  // Obtener programación semanal
  getWeekly: async () => {
    try {
      const response = await apiClient.get('/programacion/weekly');
      return response.data;
    } catch (error) {
      console.error('Error fetching weekly programming:', error);
      throw error;
    }
  },

  // Obtener programas por día
  getByDay: async (day) => {
    try {
      const response = await apiClient.get(`/programacion/day/${day}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching programming by day:', error);
      throw error;
    }
  }
};

export default apiClient;

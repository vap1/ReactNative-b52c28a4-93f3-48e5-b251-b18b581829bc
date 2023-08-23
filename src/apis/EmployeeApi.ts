
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface EmployeeResponse {
  success: boolean;
  errorMessage?: string;
  data?: Employee[];
}

export const getEmployees = async (): Promise<EmployeeResponse> => {
  try {
    const response = await axios.get<Employee[]>(`${BASE_URL}/employees`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      errorMessage: error.message,
    };
  }
};

export const addEmployee = async (employee: EmployeeDetails): Promise<EmployeeResponse> => {
  try {
    const response = await axios.post<Employee>(`${BASE_URL}/employees`, employee);
    return {
      success: true,
      data: [response.data],
    };
  } catch (error) {
    return {
      success: false,
      errorMessage: error.message,
    };
  }
};

export const deleteEmployee = async (employeeId: number): Promise<EmployeeResponse> => {
  try {
    await axios.delete(`${BASE_URL}/employees/${employeeId}`);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      errorMessage: error.message,
    };
  }
};
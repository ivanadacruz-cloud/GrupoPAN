export type UserRole = 'patient' | 'caregiver' | 'professional' | 'researcher' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface PatientProfile extends UserProfile {
  role: 'patient';
  birthDate: string;
  diagnosisDate: string;
  hoehnYahrStage: number;
}

export interface ProfessionalProfile extends UserProfile {
  role: 'professional';
  specialty: string;
  registrationNumber: string; // CRM, CREFITO, etc
}

// Mock Database
export const MOCK_USERS: UserProfile[] = [
  { id: '1', name: 'João Silva (Paciente)', email: 'joao@example.com', role: 'patient' },
  { id: '2', name: 'Dra. Ana Costa', email: 'ana@example.com', role: 'professional' },
];

export interface RegisterRequest {
    firstName: string;
    secondName?: string;
    firstLastName: string;
    secondLastName?: string;
    curp: string;
    employeeNumber: string;
    rollNumber: number;
    birthDate: string;
    birthCity: string;
    birthState: string;
    major: string;
    institutionalEmail: string;
    personalEmail: string;
    phoneNumber: string;
    gender: number;
    maritalSituation: number;
    academicGrade: string;
    digitalSignature?: string | null;
    password: string;
}
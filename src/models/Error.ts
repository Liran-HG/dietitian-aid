export enum ErrorCode {
    SUCCESS = 0,
    UNKNOWN_ERROR = 999,

    GENERAL_DB_ERROR=10,

    // Create Patient    
    CREATE_PATIENT_INVALID_INPUT= 1000,
    CREATE_PATIENT_PATIENT_EXISTS=2000,
    
  
}
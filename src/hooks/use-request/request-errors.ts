class RequestError {
  constructor(apiErrors: any) {
    // futuramente tratar melhor os erros de request, quando forem mapeados.
    return apiErrors;
  }
}

export { RequestError };

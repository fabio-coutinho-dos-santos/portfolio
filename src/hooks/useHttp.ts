export interface IHttpError {
  statusCode: number;
  message: string;
}


export const useHttp = () => {

  const makePost = async (url: string, body: unknown) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    const response = await fetch(url, options)
    return response;
  }

  const makeGet = async (url: string) => {
    const response = await fetch(url);
    return response;
  }

  const inspectResponse = async (response: any) => {

    const jsonResponse = await response.json();

    if (response.status === 201) {
      return await jsonResponse
    } else {
      const error: IHttpError = {
        statusCode: response.status,
        message: jsonResponse.message
      }
      throw new Error(JSON.stringify(error))
    }
  }

  return {
    makePost,
    makeGet,
    inspectResponse
  }

}


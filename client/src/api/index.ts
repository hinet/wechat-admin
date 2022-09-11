import http from "./http";
export default {
    login(params:any){
       return http.put(`/auth`,params);
    }
}
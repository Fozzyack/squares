export const getBackendUrl = () => "/api";

export const getServerBackendUrl = () =>
    process.env.BACKEND_URL || "http://localhost:8800";

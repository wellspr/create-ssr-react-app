const origin = "http://localhost:4000";

export const corsConfig = {
    origin: origin,
    allowedHeaders: [
        "Content-Type", 
    ],
    credentials: true,
};

export const appBrandName = () => {
    return "SSR React App"
};

export const githubLink = () => {
    return "https://github.com/wellspr/create-ssr-react-app";
};
export const port = 4000;

const origin = `http://localhost:${port}`;

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
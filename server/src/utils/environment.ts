export function getEnvironmentVariable(name: string): string {
    const value: string | undefined = process.env[name];

    if (typeof value !== "string") {
        throw new Error(`Environment variable ${name} not found.`);
    }
    return value;
}

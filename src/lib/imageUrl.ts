/**
 * Helper function to resolve image URLs with the correct base path
 * This ensures images work correctly on GitHub Pages with subdirectory deployment
 */
export function getImageUrl(imagePath: string): string {
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${baseUrl}${cleanPath}`;
}

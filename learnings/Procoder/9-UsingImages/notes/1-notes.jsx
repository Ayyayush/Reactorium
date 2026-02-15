/**
 * Using Images in React
 *
 * In React, images are treated as **modules**, not simple file paths.
 * This allows the build tool (like Parcel, Vite, or Webpack) to
 * optimize and correctly bundle images with the application.
 *
 * ------------------------------------------------------------
 * Ways to Use Images in React:
 * ------------------------------------------------------------
 *
 * 1. Importing Images (Recommended for Beginners)
 * ------------------------------------------------
 * - Images are imported at the top of the file.
 * - The imported variable becomes the image URL.
 *
 * Example:
 * import Logo from "./assets/logo.png";
 *
 * Usage:
 * <img src={Logo} alt="logo" />
 *
 * Why this works:
 * - The bundler knows the image is being used.
 * - It can optimize, cache, and rename the file safely.
 *
 * ------------------------------------------------------------
 * 2. Using Images from the public Folder
 * ------------------------------------------------------------
 * - Images placed inside the `public` folder do not need importing.
 * - They are accessed using a direct path.
 *
 * Example:
 * <img src="/logo.png" alt="logo" />
 *
 * Note:
 * - These images are NOT processed by the bundler.
 * - No optimization or hashing is applied.
 *
 * ------------------------------------------------------------
 * Important Rules:
 * ------------------------------------------------------------
 * - Always use the `img` tag inside JSX.
 * - Use `alt` attribute for accessibility.
 * - Do NOT use relative paths directly in JSX
 *   (e.g. "./image.png") — it may break builds.
 *
 * ------------------------------------------------------------
 * How Images Are Used in Your Project:
 * ------------------------------------------------------------
 * - Parent components import the image.
 * - Image URL is passed to child components via props.
 * - Child components simply render the image.
 *
 * Example:
 * <Button imageUrl={LeftArrow} />
 *
 * ------------------------------------------------------------
 * Interview One-Liner:
 * ------------------------------------------------------------
 * In React, images are imported as modules so that the bundler
 * can process, optimize, and include them correctly in the build.
 */

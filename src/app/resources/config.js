const baseURL = "demo.magic-portfolio.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const style = {
  theme: "light", // dark | light - Changed to light to better showcase vibrant art
  neutral: "sand", // sand | gray | slate - Changed to sand for a warmer, vintage feel
  brand: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast - Changed to color for more vibrant appearance
  solidStyle: "plastic", // flat | plastic - Changed to plastic for more depth
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent - Changed to filled for stronger colors
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 100, // Increased radius for more dramatic effect
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 15, // Added a slight tilt
    colorStart: "brand-background-strong",
    colorEnd: "accent-background-weak", // Changed to create more vibrant gradient
    opacity: 70, // Increased opacity
  },
  dots: {
    display: true,
    size: 3, // Slightly larger dots
    color: "brand-on-background-weak",
    opacity: 30, // Increased opacity
  },
  lines: {
    display: true, // Enabled lines for a more traditional, artistic feel
    color: "neutral-alpha-weak",
    opacity: 20,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: false,
  time: false,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "brand-background-weak", // Changed for complementary color scheme
      opacity: 80, // Adjusted opacity
    },
    dots: {
      display: true, // Enabled dots
      size: 24,
      color: "brand-on-background-weak",
      opacity: 25, // Reduced opacity for subtlety
    },
    lines: {
      display: true, // Enabled lines
      color: "neutral-alpha-weak",
      opacity: 30, // Reduced opacity
    },
    grid: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };

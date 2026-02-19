/**
 * Children Props (Beginner Hinglish – DETAIL MEIN)
 *
 * ------------------------------------------------------------
 * What are childrenProps?
 * ------------------------------------------------------------
 * React mein `children` ek **special prop** hota hai.
 *
 * Jab hum kisi component ke opening aur closing tag
 * ke beech kuch likhte hain,
 * toh React us content ko automatically
 * `props.children` ke andar bhej deta hai.
 *
 * Simple words:
 * 👉 Component ke tags ke beech ka content = children prop
 *
 * 
 * 
 * 
 * 
 * 
 * ------------------------------------------------------------
 * ! Example (basic)
 * ------------------------------------------------------------
 *
 * <Card>
 *   <h1>Hello</h1>
 *   <p>This is inside Card</p>
 * </Card>
 *
 * Yahan:
 * <h1>...</h1> aur <p>...</p>
 * 👉 ye dono `children` ban jaate hain
 *
 * ------------------------------------------------------------
 * Child component ka code
 * ------------------------------------------------------------
 *
 * const Card = (props) => {
 *   return (
 *     <div>
 *       {props.children}
 *     </div>
 *   )
 * }
 *
 * ------------------------------------------------------------
 * props.children ka matlab
 * ------------------------------------------------------------
 * props.children = jo bhi parent ne component ke
 * opening aur closing tag ke beech diya hai
 *
 * ------------------------------------------------------------
 * Are props and children props different?
 * ------------------------------------------------------------
 * ❌ Conceptually: NO
 * ✅ Practically: YES
 *
 * `children` bhi ek prop hi hota hai,
 * bas React usko automatically handle karta hai.
 *
 * Table:
 *
 * | Normal Props        | children Prop              |
 * |---------------------|----------------------------|
 * | Manually pass karte | Automatically milta hai    |
 * | Named props         | Always called `children`   |
 * | <Comp a={1} />      | <Comp>content</Comp>       |
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ------------------------------------------------------------
 * ! Syntax of passing props
 * ------------------------------------------------------------
 *
 * 1️⃣ Normal props
 *
 * <Button text="Click Me" />
 *
 * function Button(props) {
 *   return <button>{props.text}</button>
 * }
 *
 * ------------------------------------------------------------
 * 2️⃣ Children props
 *
 * <Button>
 *   Click Me
 * </Button>
 *
 * function Button(props) {
 *   return <button>{props.children}</button>
 * }
 *
 * ------------------------------------------------------------
 * Rules of Props (IMPORTANT)
 * ------------------------------------------------------------
 *
 * 1️⃣ Props are READ-ONLY
 *
 * ❌ props.text = "Hi"
 * ✔ Parent hi props change karta hai
 *
 * ------------------------------------------------------------
 * 2️⃣ Props flow ONE WAY
 *
 * Parent → Child
 *
 * Child → Parent ❌ (direct nahi)
 *
 * ------------------------------------------------------------
 * 3️⃣ Props change hone par child re-render hota hai
 *
 * ------------------------------------------------------------
 * How should components receive props in child component?
 * ------------------------------------------------------------
 *
 * 1️⃣ Using props object
 *
 * const Card = (props) => {
 *   return <div>{props.children}</div>
 * }
 *
 * ------------------------------------------------------------
 * 2️⃣ Using destructuring (MOST USED)
 *
 * const Card = ({ children }) => {
 *   return <div>{children}</div>
 * }
 *
 * ------------------------------------------------------------
 * Real-life use cases of children props
 * ------------------------------------------------------------
 *
 * ✔ Wrapper components (Card, Modal, Layout)
 * ✔ Reusable UI containers
 * ✔ Layout-based components
 *
 * ------------------------------------------------------------
 * One-line Interview Answer
 * ------------------------------------------------------------
 *
 * `children` is a special React prop that allows passing
 * nested JSX content into a component.
 *
 * ------------------------------------------------------------
 * GOLDEN LINE (YAAD RAKHO)
 * ------------------------------------------------------------
 *
 * 👉 Normal props = attributes ke through data
 * 👉 children prop = component ke beech ka content
 */

/**
 * Doubts – Props & children (Beginner Hinglish, VERY CLEAR)
 *
 * ============================================================
 * 1️⃣ What is props actually?
 * ============================================================
 *
 * Props ka matlab hota hai → PROPERTIES
 *
 * React mein:
 * 👉 props ek normal JavaScript OBJECT hota hai
 * 👉 jisme parent component data bhejta hai
 *
 * Example:
 *
 * <Card title="Hello" count={5} />
 *
 * Card ke andar:
 *
 * props = {
 *   title: "Hello",
 *   count: 5
 * }
 *
 * 👉 props = parent se aaya hua data
 *
 * ------------------------------------------------------------
 * IMPORTANT:
 * ------------------------------------------------------------
 * props READ-ONLY hote hain
 * child component props ko change nahi kar sakta
 *
 * ============================================================
 * 2️⃣ children prop kya hota hai?
 * ============================================================
 *
 * `children` ek SPECIAL prop hota hai
 * jo React AUTOMATICALLY create karta hai
 *
 * 👉 Jo bhi component ke opening aur closing tag
 * ke beech likha hota hai
 * 👉 wo sab `props.children` ban jaata hai
 *
 * Example:
 *
 * <Card>
 *   <h1>Hello</h1>
 * </Card>
 *
 * Card ko milega:
 *
 * props = {
 *   children: <h1>Hello</h1>
 * }
 *
 * ============================================================
 * 3️⃣ Are manual props and children prop different?
 * ============================================================
 *
 * ❌ Conceptually: NO
 * ✅ Practically: YES
 *
 * children bhi ek prop hi hai
 * bas React use AUTOMATICALLY set karta hai
 *
 * ------------------------------------------------------------
 * IMPORTANT DOUBT:
 * "What if manual prop and children prop name same ho?"
 * ------------------------------------------------------------
 *
 * ❌ Ye allowed NAHI hai:
 *
 * <Card children="Hello">
 *   <h1>World</h1>
 * </Card>
 *
 * React mein:
 * 👉 JSX ke beech ka content ALWAYS jeet jaata hai
 *
 * Result:
 * props.children = <h1>World</h1>
 *
 * 👉 Manual `children` overwrite ho jaata hai
 *
 * ❗ Isliye:
 * Kabhi manually `children` prop mat bhejo
 *
 * ============================================================
 * 4️⃣ Curly braces {} ke andar kya hota hai?
 * ============================================================
 *
 * JSX rule:
 * 👉 {} ke andar hum JavaScript likhte hain
 *
 * ------------------------------------------------------------
 * Case 1:
 *
 * <Card>
 *   {cardName}
 * </Card>
 *
 * 👉 cardName ek JS variable hai
 * 👉 Iska value children ban jaayega
 *
 * props.children = cardName ka value
 *
 * ------------------------------------------------------------
 * Case 2:
 *
 * <Card>
 *   {1 + 2}
 * </Card>
 *
 * props.children = 3
 *
 * ------------------------------------------------------------
 * IMPORTANT:
 * ------------------------------------------------------------
 * Haan ✅
 * {} ke andar jo bhi likhte ho
 * wo bhi children hi hota hai
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ============================================================
 * 5️⃣ Different cases – tumhari confusion clear karte hain
 * ============================================================
 *
 * ------------------------------------------------------------
 * Case A:
 *
 * <Card>
 *   <h1></h1>
 * </Card>
 *
 * 👉 props.children = <h1></h1>
 *
 * ------------------------------------------------------------
 * Case B:
 *
 * <Card>
 *   {cardName}
 *   <h1></h1>
 * </Card>
 *
 * 👉 props.children = [
 *   cardName ka value,
 *   <h1></h1>
 * ]
 *
 * (children ARRAY ban jaata hai)
 *
 * ------------------------------------------------------------
 * Case C:
 *
 * <Card onHover={} title="My Card">
 *   <h1>Hello</h1>
 * </Card>
 *
 * props = {
 *   onHover: function,
 *   title: "My Card",
 *   children: <h1>Hello</h1>
 * }
 *
 * 👉 Normal props aur children saath-saath aa sakte hain
 *
 * ============================================================
 * 6️⃣ children EMPTY ho sakta hai?
 * ============================================================
 *
 * <Card></Card>
 *
 * 👉 props.children = undefined
 *
 * Ye bilkul valid hai
 *
 * ============================================================
 * 7️⃣ Golden rules (YAAD RAKHO)
 * ============================================================
 *
 * ✔ children bhi ek prop hi hai
 * ✔ JSX ke beech ka content = children
 * ✔ {} ke andar JS hota hai, aur wo bhi children ban sakta hai
 * ✔ children string, number, JSX, ya ARRAY kuch bhi ho sakta hai
 * ❌ manually children prop bhejna avoid karo
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ============================================================
 * One-line interview answer
 * ============================================================
 *
 * Props are a JavaScript object passed from parent to child,
 * and `children` is a special prop that represents the content
 * written between a component’s opening and closing tags.
 *
 * ============================================================
 * FINAL LOCK (sabse important line)
 * ============================================================
 *
 * 👉 Component ke attributes = normal props
 * 👉 Component ke beech ka content = children prop
 */

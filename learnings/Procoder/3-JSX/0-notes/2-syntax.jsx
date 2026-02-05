/**
 * Rules regarding JSX Syntax (with examples)
 *
 * 1️⃣ JSX must have a single parent element
 *
 * ❌ Invalid:
 *    return (
 *        <h1>Hello</h1>
 *        <p>World</p>
 *    );
 *
 * ✅ Valid:
 *    return (
 *        <div>
 *            <h1>Hello</h1>
 *            <p>World</p>
 *        </div>
 *    );
 *
 *
 * 2️⃣ JSX expressions must be written inside { }
 *
 * ❌ Invalid:
 *    <h1>Hello name</h1>
 *
 * ✅ Valid:
 *    <h1>Hello {name}</h1>
 *
 *
 * 3️⃣ Use className instead of class
 *
 * ❌ Invalid:
 *    <h1 class="title">Hello</h1>
 *
 * ✅ Valid:
 *    <h1 className="title">Hello</h1>
 *
 *
 * 4️⃣ JSX attributes use camelCase
 *
 * ❌ Invalid:
 *    <button onclick="handleClick()">Click</button>
 *
 * ✅ Valid:
 *    <button onClick={handleClick}>Click</button>
 *
 *
 * 5️⃣ JSX supports only JavaScript expressions, not statements
 *
 * ❌ Invalid:
 *    <h1>{if(isLoggedIn){ "Welcome" }}</h1>
 *
 * ✅ Valid:
 *    <h1>{isLoggedIn ? "Welcome" : "Login"}</h1>
 *
 *
 * 6️⃣ Self-closing tags must be closed
 *
 * ❌ Invalid:
 *    <img src="logo.png">
 *
 * ✅ Valid:
 *    <img src="logo.png" />
 *
 *
 * 7️⃣ Inline styles must be written as an object
 *
 * ❌ Invalid:
 *    <h1 style="color:red">Hello</h1>
 *
 * ✅ Valid:
 *    <h1 style={{ color: "red" }}>Hello</h1>
 *
 *
 * 8️⃣ Comments in JSX must be inside { }
 *
 * ❌ Invalid:
 *    <!-- JSX Comment -->
 *
 * ✅ Valid:
 *    {/* JSX Comment */
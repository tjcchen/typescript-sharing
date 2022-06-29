/**
 * TypeScript Intro
 * 1. Language which builds on JavaScript
 * 2. TypeScript code is transformed in JS through compiler. (eg: TS compiler, Babel)
 * 3. Goal: writing Typed JavaScript
 * 
 * Several main pros:
 * 1. Type checking errors => catch errors before they occur in production
 * 2. Providing better documentation => makes it much easier for you and others to understand the code
 * 3. More reliable and easier to understand codebase( benefits you during building new features, bugfixes and refactors )
 * 4. You'll start appreciate it when your codebase grows large or when multiple developers work on it
 */

export default function TypeScript() {
  const user = {
    name: 'John',
    age: 55,
  };

  return (
    <>
      <p>{user.name}</p>
    </>
  );
}
import { CodeBlock } from "../components/CodeBlock.js";

export function FaqPage() {
  return (
    <div className="page docs-page">
      <h1>FAQ</h1>

      <section>
        <h2>Browser doesn't scroll to top after navigation</h2>
        <p>
          According to the Navigation API specification, the browser should
          automatically scroll to the top of the page after a same-document
          navigation. However, as of now, Chrome and Safari do not follow this
          part of the spec.
        </p>
        <p>
          As a workaround, you can listen to the <code>navigatesuccess</code>{" "}
          event and scroll to the top manually:
        </p>
        <CodeBlock language="tsx">{`import { useEffect } from "react";

function App() {
  useEffect(() => {
    const navigation = window.navigation;
    if (!navigation) {
      return;
    }
    const controller = new AbortController();
    navigation.addEventListener(
      "navigatesuccess",
      () => {
        const transition = navigation.transition;
        if (
          transition.navigationType === "push" ||
          transition.navigationType === "replace"
        ) {
          // Safari ignores scrolling immediately after navigation,
          // so we wait a bit before scrolling
          setTimeout(() => {
            window.scrollTo(0, -1);
          }, 10);
        }
      },
      { signal: controller.signal },
    );
    return () => {
      controller.abort();
    };
  }, []);

  return <Router routes={routes} />;
}`}</CodeBlock>
      </section>
    </div>
  );
}

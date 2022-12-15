import { Component } from 'react';
// @ts-ignore
import { attributes, react as HomeContent } from '../content/home.md';
import Script from 'next/script';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <article>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map(
              (cat: { name: string; description: string }, k: number) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ),
            )}
          </ul>
        </article>
      </>
    );
  }
}

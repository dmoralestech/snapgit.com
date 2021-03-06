import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import {
  Button,
  Console,
  DocumentTitle,
  Logo,
  Signature,
} from 'components';

import patrickCommit from '../images/patrick.png';
import felixCommit from '../images/felix.png';
import fisherCommit from '../images/fisher.png';

import css from '../css/index.css';

export default class Index extends Component {
  authors = [
    {
      image: felixCommit,
      name: 'Felix Krause',
      signature: 'felix',
      social: {
        github: 'https://github.com/krausefx',
        twitter: 'https://twitter.com/krausefx',
      },
    }, {
      image: patrickCommit,
      name: 'Patrick Camacho',
      signature: 'patrick',
      social: {
        github: 'https://github.com/camacho',
        twitter: 'https://twitter.com/icofyre',
      },
    }, {
      image: fisherCommit,
      name: 'David Fisher',
      signature: 'david',
      social: {
        twitter: 'https://twitter.com/fsha',
      },
    },
  ];

  renderCommit(author) {
    return (
      <div
        className={css.commit}
        key={author.name}
        style={{ backgroundImage: `url(${author.image})` }}
      >
      </div>
    );
  }

  renderAuthor(author) {
    return (
      <div
        className={css.author}
        key={author.name}
      >
        <Signature
          author={author.signature}
          fill="#9392cd"
        />
        <div className="links">
          {Object.keys(author.social).map((type) => (
            <a
              href={author.social[type]}
              className={css.link}
              key={type}
            >
              <Icon name={type} />
            </a>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <DocumentTitle title="The most powerful way to share your commits">
        <div className={css.home}>
          <Logo />
          <h2 className={css.headline}>
            No more lonely commits
          </h2>
          <h5 className={css.subheadline}>
            The most powerful way to share your commits
          </h5>
          <div className={css.commits}>
            {this.authors.map(::this.renderCommit)}
          </div>
          <Console
            lines={[
              'sudo gem install snapgit',
              'snapgit init',
            ]}
          />
          <p className={css.summary}>
            Snapgit snaps a selfie everytime you make a commit and
            sets it as your profile picture for Twitter and Gravatar
          </p>
          <div className={css.fork}>
            <a target="_blank" href="https://github.com/snapgit/snapgit">
              <Button>
                <Icon name="github" />
                Open on GitHub
              </Button>
            </a>
          </div>
          <div className={css.authors}>
            {this.authors.map(::this.renderAuthor)}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

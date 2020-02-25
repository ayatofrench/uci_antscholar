import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'
import withAuthUser from '../utils/pageWrappers/withAuthUser'
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo'
import logout from '../utils/auth/logout'

import 'styles/styles.scss';

const Index = props => {
  const { AuthUserInfo, data } = props
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)
  const { favoriteFood } = data

  return (
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-weight-bold is-size-1">
            Ant Scholar
          </h1>
          <h2 class="subtitle has-text-centered is-size-2">
            Connecting You With Research
          </h2>
          <div class="subtitle has-text-centered is-size-7">
            Mission Statement
          </div>
        </div>
        <div class="columns is-mobile is-centered" style={{paddingTop:40}}>
          <div class="column has-text-centered">
            <button class="button is-gradient" style={{marginRight:40}}>Find Research</button>
            <Link href="/form">
              <button class="button is-primary is-outlined">Post Research</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Just an example.
const mockFetchData = async userId => ({
  user: {
    ...(userId && {
      id: userId,
    }),
  },
  favoriteFood: 'pizza',
})

Index.getInitialProps = async ctx => {
  // Get the AuthUserInfo object. This is set in `withAuthUser.js`.
  // The AuthUserInfo object is available on both the server and client.
  const AuthUserInfo = get(ctx, 'myCustomData.AuthUserInfo', null)
  const AuthUser = get(AuthUserInfo, 'AuthUser', null)

  // You can also get the token (e.g., to authorize a request when fetching data)
  // const AuthUserToken = get(AuthUserInfo, 'token', null)

  // You can fetch data here.
  const data = await mockFetchData(get(AuthUser, 'id'))

  return {
    data,
  }
}

Index.displayName = 'Index'

Index.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    favoriteFood: PropTypes.string.isRequired,
  }).isRequired,
}

Index.defaultProps = {
  AuthUserInfo: null,
}

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index))

/*<div>
<p>Hi there!</p>
{!AuthUser ? (
  <p>
    You are not signed in.{' '}
    <Link href={'/auth'}>
      <a>Sign in</a>
    </Link>
  </p>
) : (
  <div>
    <p>You're signed in. Email: {AuthUser.email}</p>
    <p
      style={{
        display: 'inlinelock',
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
      onClick={async () => {
        try {
          await logout()
          Router.push('/auth')
        } catch (e) {
          console.error(e)
        }
      }}
    >
      Log out
    </p>
  </div>
)}
<div>
  <Link href={'/test'}>
    <a>Another example page</a>
  </Link>
</div>
<div>
  <div>Your favorite food is {favoriteFood}.</div>
</div>
</div>*/
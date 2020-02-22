/* globals window */
// import React, { useEffect, useState } from 'react'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import initFirebase from '../utils/auth/initFirebase'

// // Init the Firebase app.
// initFirebase()

// const firebaseAuthConfig = {
//   signInFlow: 'popup',
//   // Auth providers
//   // https://github.com/firebase/firebaseui-web#configure-oauth-providers
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false,
//     },
//   ],
//   signInSuccessUrl: '/',
//   credentialHelper: 'none',
// }

// const FirebaseAuth = () => {
//   // Do not SSR FirebaseUI, because it is not supported.
//   // https://github.com/firebase/firebaseui-web/issues/213
//   const [renderAuth, setRenderAuth] = useState(false)
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setRenderAuth(true)
//     }
//   }, [])
//   return (
//     <div>
//       {renderAuth ? (
//         <StyledFirebaseAuth
//           uiConfig={firebaseAuthConfig}
//           firebaseAuth={firebase.auth()}
//         />
//       ) : null}
//     </div>
//   )
// }

// export default FirebaseAuth

import React from "react";
import { inject, observer } from "mobx-react";
import { autorun } from "mobx";
import AdminPage from "~/components/admin/AdminPage";
import Router from "next/router";
import ConnectedPage from "~/pages/_hocs/ConnectedPage";
import styled from "styled-components";
import Config from "~/utils/config";

@inject("uropStore")
@observer
class FirebaseAuth extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.uropStore.auth.subscribe();
    this.disposer = autorun(() => {
      if(this.props.uropStore.auth.isAuthenticated) {
        Router.replace("/")
      };
    })
  }

  componentWillUnmount() {
    if (this.disposer) {
      this.disposer();
    }
  }

  

}


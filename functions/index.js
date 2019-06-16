const functions = require('firebase-functions');
const admin = require('firebase-admin');

const categories = require('./constants/categories')

admin.initializeApp();

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {

// });

// exports.initialCategories = functions.auth.user().onCreate(async (user) => {
//   try {
//     await Promise.all(
//       categories.map((item) => {
//         const { id, ...rest } = item
//         const data = {
//           ...rest,
//           userId: user.uid
//         }
//         return admin.firestore().collection('categories').doc(id).set(data)
//       })
//     )
//     console.log('Initial Categories Success')
//   } catch (err) {
//     console.log(err)
//     return
//   }
// });

exports.createFirstAccount = functions.auth.user().onCreate(async (user) => {
  const account = {
    userId: user.uid,
    name: 'My Account'
  }

  try {
    const result  = await admin.firestore()
      .collection('accounts')
      .add(account)
    console.log('First Account Created result:', result)
  } catch(err) {
    console.log(err)
    return
  }
});

/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const isAuthorized = require('../api/policies/isAuthorized');
const testCreadentials = require('../api/policies/testCreadentials');

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': [isAuthorized],

  'UsersController': {
    'signin': [testCreadentials],
    'signup': [testCreadentials],
  }
};

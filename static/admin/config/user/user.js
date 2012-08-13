/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */

define(
    ['jquery-nos-appdesk'],
    function($) {
        "use strict";
        return function(appDesk) {
            return {
                tab : {
                    label : appDesk.i18n('Users'),
                    iconUrl : 'static/novius-os/admin/novius-os/img/32/user.png'
                },
                actions : {
                    edit : {
                        label : appDesk.i18n('Edit'),
                        icon : 'pencil',
                        primary : true,
                        action : {
                            action : 'nosTabs',
                            tab : {
                                url : 'admin/nos/user/user/insert_update/{{id}}',
                                label : '{{title}}'
                            }
                        }
                    },
                    'delete' : {
                        label : appDesk.i18n('Delete'),
                        icon : 'trash',
                        primary : true,
                        action : {
                            action : 'nosConfirmationDialog',
                            dialog : {
                                contentUrl: 'admin/nos/user/user/delete/{{id}}',
                                title: appDesk.i18n('Delete a user')._(),
                                confirmedUrl: 'admin/nos/user/user/delete_confirm',
                                appDesk: appDesk
                            }
                        }
                    }
                },
                reloadEvent : 'Nos\\Model_User',
                appdesk : {
                    adds : {
                        user : {
                            label : appDesk.i18n('Add a user'),
                            action : {
                                action : 'nosTabs',
                                method : 'add',
                                tab : {
                                    url : 'admin/nos/user/user/insert_update',
                                    label : appDesk.i18n('Add a user')._()
                                }
                            }
                        }
                    },
                    grid : {
                        proxyUrl : 'admin/nos/user/appdesk/json',
                        columns : {
                            user : {
                                headerText : appDesk.i18n('Name'),
                                dataKey : 'fullname',
                                sortDirection : 'ascending'
                            },
                            email : {
                                headerText : appDesk.i18n('Email'),
                                dataKey : 'email'
                            },
                            actions : {
                                actions : ['edit', 'delete']
                            }
                        }
                    }
                }
            }
        }
    });

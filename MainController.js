angular.module('myapp', [])
    .controller("mainController", ['$scope', function ($scope) {
        $scope.contacts = [
            {
                id: 1,
                clicked: false,
                name: "Friends",
                type: "Group",
                contacts: [
                    { id: 2, clicked: false, name: "Udi", type: "Contact" },
                    { id: 3, clicked: false, name: "Tommy", type: "Contact" },
                    {
                        id: 6,
                        clicked: false,
                        name: "Old Friends",
                        type: "Group",
                        contacts: [
                            { id: 7, clicked: false, name: "Itay", type: "Contact" },
                        ]
                    },
                ]
            },
            {
                id: 4,
                clicked: false,
                name: "Family",
                type: "Group",
                contacts: [
                    { id: 5, clicked: false, name: "Roni", type: "Contact" },
                ]
            },
            { id: 8, clicked: false, name: "Ori", type: "Contact" },
        ];

        $scope.ContactsLst = function(con){
                if (con.hasOwnProperty("contacts") && con.clicked) {
                    return con.contacts;
                }
                return [];
            }

        $scope.clicked = function(item, clicked) {
                item.clicked = clicked;

            }
        }])
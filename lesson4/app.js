$(function () {

    ItemsList = Backbone.Collection.extend(
        {
            initialize: function () {
                this.bind("add", function (model) {
                    view.render(model);
                })
            }
        }
    );

    ItemsView = Backbone.View.extend(
        {
            tagName: 'tr',
            events: {
                'click #add-input': 'addItemToList'
            },
            initialize: function () {
                var thisView = this;
                thisView.itemsList = new ItemsList();
                _.bindAll(thisView, 'render');

            },
            addItemToList: function () {
                var inputField1 = getID('itemInput1');
                var inputField2 = getID('itemInput2');
                var inputField3 = getID('itemInput3');
                var itemValue1 = '<td>' + inputField1.value + '</td>';
                var itemValue2 = '<td>' + inputField2.value + '</td>';
                var itemValue3 = '<td>' + inputField3.value + '</td>';
                var itemValue = itemValue1 + itemValue2 + itemValue3;
                this.itemsList.add({myValue: itemValue})
            },
            render: function (model) {
                var itemListElement = getID('my-list');
                var tr = document.createElement('tr');
                tr.innerHTML = model.get('myValue');
                itemListElement.appendChild(tr);
                console.log('item added');
            }

        }
    );

    var view = new ItemsView({el: 'body'});

});
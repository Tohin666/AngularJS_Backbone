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
                var inputField1 = $('#itemInput1');
                var inputField2 = $('#itemInput2');
                var inputField3 = $('#itemInput3');
                var itemValue1 = '<td>'+inputField1.val()+'</td>';
                var itemValue2 = '<td>'+inputField2.val()+'</td>';
                var itemValue3 = '<td>'+inputField3.val()+'</td>';
                var itemValue = itemValue1 + itemValue2 + itemValue3;
                this.itemsList.add({myValue: itemValue})
            },
            render: function (model) {
                var itemListElement = $('#my-list');
                itemListElement.append('<tr>'+model.get('myValue')+'</tr>');
                console.log('item added');
            }

        }
    );

    var view = new ItemsView({el: 'body'});

});
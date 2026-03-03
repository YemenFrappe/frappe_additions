(() => {
  // ../frappe_additions/frappe_additions/public/list_unassign_from/public/js/libs/unassign_from_dialog.js
  var UnassignFromDialog = class {
    constructor(opts) {
      $.extend(this, opts);
      this.make();
      this.set_description_from_doc();
    }
    make() {
      var me = this;
      this.dialog = new frappe.ui.Dialog({
        title: __("Remove From ToDo"),
        fields: this.get_fields(),
        primary_action_label: __("Remove"),
        primary_action: function() {
          var args = me.dialog.get_values();
          if (args) {
            var unassign_from = args.unassign_from;
            if (!$.isArray(unassign_from))
              unassign_from = [];
            if (args.unassign_from_me)
              unassign_from.unshift(frappe.session.user);
            me.dialog.set_message(__("Unassigning") + "...");
            frappe.call({
              method: me.method,
              args: $.extend(args, {
                doctype: me.doctype,
                docnames: me.docnames,
                unassign_from
              }),
              btn: me.dialog.get_primary_btn(),
              callback: function(r) {
                if (!r.exc) {
                  if (me.callback)
                    me.callback(r);
                  me.dialog && me.dialog.hide();
                } else {
                  me.dialog.clear_message();
                }
              }
            });
          }
        }
      });
    }
    set_description_from_doc() {
      if (this.frm && this.frm.meta.title_field)
        this.dialog.set_value("description", this.frm.doc[this.frm.meta.title_field]);
    }
    get_fields() {
      var me = this;
      return [
        {
          label: __("Unassign from me"),
          fieldtype: "Check",
          fieldname: "unassign_from_me",
          default: 0
        },
        {
          fieldtype: "MultiSelectPills",
          fieldname: "unassign_from",
          label: __("Unassign From"),
          reqd: true,
          onchange: function() {
            try {
              var vals = this.get_values() || [], idx = $.isArray(vals) ? vals.indexOf(frappe.session.user) : -1;
              if (idx >= 0) {
                vals.splice(idx, 1);
                me.dialog.set_value("unassign_from_me", 1);
                me.dialog.set_value("unassign_from", vals);
              }
            } catch (_) {
            }
          },
          get_data: function(txt) {
            return frappe.db.get_link_options("User", txt, { user_type: "System User", enabled: 1 });
          }
        }
      ];
    }
  };

  // ../frappe_additions/frappe_additions/public/list_unassign_from/public/js/libs/custom_bulk_operations.js
  var CustomBulkOperations = class {
    constructor(doctype) {
      if (!doctype)
        frappe.throw(__("Doctype is not provided"));
      this.doctype = doctype;
    }
    unassign(docnames, done) {
      if (docnames.length > 0) {
        var unassign_from = new UnassignFromDialog({
          obj: this,
          method: "frappe_list_unassign_from.api.remove_multiple",
          doctype: this.doctype,
          docnames,
          callback: done
        });
        unassign_from.dialog.clear();
        unassign_from.dialog.show();
      } else {
        frappe.msgprint(__("Select a single or multiple entries to unassign users from"));
      }
    }
  };

  // ../frappe_additions/frappe_additions/public/list_unassign_from/public/js/unassign_from_v13.bundle.js
  frappe.views.ListView = class ListView extends frappe.views.ListView {
    get_actions_menu_items() {
      var me = this, doctype = this.doctype, actions_menu_items = super.get_actions_menu_items(), bulk_operations = new CustomBulkOperations(doctype), is_field_editable = function(field_doc) {
        return field_doc.fieldname && frappe.model.is_value_type(field_doc) && field_doc.fieldtype !== "Read Only" && !field_doc.hidden && !field_doc.read_only && !field_doc.is_virtual;
      }, has_editable_fields = function(doctype2) {
        return frappe.meta.get_docfields(doctype2).some(function(field_doc) {
          return is_field_editable(field_doc);
        });
      }, bulk_unassignment = function() {
        return {
          label: __("Unassign From", null, "Button in list view actions menu"),
          action: function() {
            bulk_operations.unassign(
              me.get_checked_items(true),
              function() {
                me.refresh();
              }
            );
          },
          standard: true
        };
      }, idx = 2;
      if (has_editable_fields(doctype))
        idx++;
      actions_menu_items.splice(idx, 0, bulk_unassignment());
      return actions_menu_items;
    }
  };
})();
//# sourceMappingURL=unassign_from_v13.bundle.DMEOXQK2.js.map

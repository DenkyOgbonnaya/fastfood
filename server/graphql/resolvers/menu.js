const {
  addMenu,
  getMenu,
  deleteMenu,
  editMenu
} = require("../../menu/menu-service")();
const uploader = require("../../configs/cloudinary-config");
const { uploadPhoto } = require("../../utils");
const { getMenuMeals } = require("../../meals/meals-service")();

const menuResolver = {
  Query: {
    getMenu: async (parent, { id }) => {
      // get menu with given id
      try {
        return await getMenu(id);
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    addMenu: async (parent, args) => {
      try {
        // gets the cover photo url
        const photo = await uploadPhoto(args.photo, uploader);
        const newMenu = { ...args, photo };

        // add the new menu to db
        return await addMenu(newMenu);
      } catch (err) {
        throw err;
      }
    },
    editMenu: async (parent, args) => {
      try {
        return await editMenu(args.id, args);
      } catch (err) {
        throw err;
      }
    },
    deleteMenu: async (parent, { id }) => {
      try {
        const deleted = await deleteMenu(id);
        return deleted ? true : false;
      } catch (err) {
        throw err;
      }
    }
  },
  Menu: {
    meals: async ({ id }) => {
      // get meals with menuId parent.id
      try {
        return await getMenuMeals(id);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = menuResolver;

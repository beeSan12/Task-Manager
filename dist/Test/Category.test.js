"use strict";
/**
 * This is a test file for the Category class.
 * @test CategoryTest
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../src/Category");
describe('Category', () => {
    let category;
    beforeEach(() => {
        // Create a new category before each test
        category = new Category_1.Category('Math');
    });
    it('should create a category with a valid name', () => {
        expect(category.name).toBe('Math');
        console.log('Category created successfully!', category);
    });
    it('should return the correct name when calling toString', () => {
        expect(category.toString()).toBe('Math');
        console.log('Category toString works correctly!', category.toString());
    });
    it('should update the category name to a valid name', () => {
        category.setCategoryName('Science');
        expect(category.name).toBe('Science');
        console.log('Category name updated successfully to Science', category);
    });
    it('should throw an error when trying to create an invalid category', () => {
        expect(() => {
            new Category_1.Category('InvalidCategory');
        }).toThrow('Invalid category name.');
    });
    it('should throw an error when creating a category with an empty name', () => {
        expect(() => {
            new Category_1.Category('');
        }).toThrow('Category name cannot be empty.');
    });
});
//# sourceMappingURL=Category.test.js.map
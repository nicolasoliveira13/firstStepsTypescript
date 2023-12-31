"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const createCourseService_1 = __importDefault(require("./createCourseService"));
function createCourse(request, response) {
    createCourseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });
    createCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Diego"
    });
    return response.send();
}
exports.createCourse = createCourse;

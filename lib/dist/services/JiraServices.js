"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJiraIssues = exports.fetchJiraProjects = void 0;
const fetchJiraProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3000/api/j/projects');
    if (response.ok) {
        console.log("ok fetchJiraProjects: ", response);
    }
    else {
        console.error(response);
        throw new Error("response.statusText");
    }
    return response.json();
});
exports.fetchJiraProjects = fetchJiraProjects;
const fetchJiraIssues = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('http://localhost:3000/api/j/issues');
    if (response.ok) {
        console.log("ok: ", response);
    }
    else {
        console.error(response);
        throw new Error("response.statusText");
    }
    return response.json();
});
exports.fetchJiraIssues = fetchJiraIssues;
//# sourceMappingURL=JiraServices.js.map
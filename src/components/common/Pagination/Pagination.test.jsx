import {create} from "react-test-renderer";
import Pagination from "./Pagination";

describe("Pagination component tests", () => {
    test("pages count is 11 but should be showed only 10", async () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let span = await root.findAllByType("span");
        expect(span.length).toBe(10);
    });
    test("if pages count is more then 10 button NEXT should be present", async () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let button = await root.findAllByType("button");
        expect(button.length).toBe(1);
    });
})


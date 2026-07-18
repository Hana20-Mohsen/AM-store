import {
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    MAX_LIMIT
} from "../constants/index.js";

const getPagination = (query = {}) => {

    let page = Number(query.page) || DEFAULT_PAGE;

    let limit = Number(query.limit) || DEFAULT_LIMIT;

    page = Math.max(page, DEFAULT_PAGE);

    limit = Math.min(
        Math.max(limit, 1),
        MAX_LIMIT
    );

    const skip = (page - 1) * limit;

    return {
        page,
        limit,
        skip
    };

};

export default getPagination;
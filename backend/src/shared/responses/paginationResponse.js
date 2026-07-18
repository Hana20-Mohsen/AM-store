const paginationResponse = (
    res,
    {
        statusCode = 200,
        message = "Success",
        data = [],
        pagination = {}
    } = {}
) => {

    const {
        page = 1,
        limit = 10,
        totalItems = 0
    } = pagination;

    const totalPages = Math.ceil(totalItems / limit);

    return res.status(statusCode).json({

        success: true,

        message,

        data,

        meta: {

            page,

            limit,

            totalItems,

            totalPages,

            hasNextPage: page < totalPages,

            hasPreviousPage: page > 1

        }

    });

};

export default paginationResponse;
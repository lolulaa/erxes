export const types = `
    type Forum {
        _id: String!
        title: String
        description: String
        languageCode: String
        createdBy: String
        createdDate: Date
        modifiedBy: String
        modifiedDate: Date
        brand: Brand
        topics: [ForumTopic]
    }

    input ForumDoc {
        title: String
        description: String
        languageCode: String
        brandId: String!
    }

    type ForumTopic {
        _id: String!
        title: String
        description: String
        forumId: String
        createdBy: String
        createdDate: Date
        modifiedBy: String
        modifiedDate: Date
        discussionIds: [String]

        discussions: [ForumDiscussion]
    }

    input ForumTopicDoc{
        title: String
        description: String
        forumId: String
        discussionIds: [String]
    }

    type ForumDiscussion{
        _id: String!
        title: String
        description: String
        topicId: String
        forumId: String
        createdBy: String
        createdUser: User
        createdDate: Date
        modifiedBy: String
        modifiedDate: Date
    }

    input ForumDiscussionDoc{
        title: String
        description: String
        topicId: String!
        forumId: String!
    }
`;

export const queries = `
    forums(page: Int perPage: Int): [Forum]
    forumDetail(_id: String!): Forum
    forumsTotalCount: Int

    forumTopics(page: Int perPage: Int): [ForumTopic]
    forumTopicDetail(_id: String!): ForumTopic
    forumTopicsTotalCount(forumId: String!):Int
    forumTopicsGetLast: ForumTopic

    forumDiscussions(page: Int perPage: Int topicId: String!): [ForumDiscussion]
    forumDiscussionDetail(_id: String!): ForumDiscussion
    forumDiscussionsTotalCount(topicId: String!): Int
`;

export const mutations = `
    forumsAdd(doc: ForumDoc!): Forum
    forumsEdit(_id: String! doc: ForumDoc): Forum
    forumsRemove(_id: String!): JSON

    forumTopicsAdd(doc: ForumTopicDoc): ForumTopic
    forumTopicsEdit(_id: String! doc: ForumTopicDoc): ForumTopic
    forumTopicsRemove(_id: String!): JSON

    forumDiscussionsAdd(doc: ForumDiscussionDoc): ForumDiscussion
    forumDiscussionsEdit(_id: String! doc: ForumDiscussionDoc): ForumDiscussion
    forumDiscussionsRemove(_id: String!): JSON 
`;
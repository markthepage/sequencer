// Copyright (C) 2019 Mark The Page

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

const Comment = require("./schemaComment.js");
const SchemaUtils = require("./schemaUtils.js");
const SchemaTitle = require("./schemaTitle.js");
const SchemaVersion = require("./schemaVersion.js");
const SchemaDescription = require("./schemaDescription.js");
module.exports._schemaFull = {
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: SchemaUtils._base + "complete",
	title: "The complete sequencer schema",
	decription: "Defines the format of the sequencer diagram",
	type: "object",
	properties: {
		title: SchemaTitle._title,
		version: SchemaVersion._version,
		description: SchemaDescription._description
	},
	required: ["title", "version"]
};

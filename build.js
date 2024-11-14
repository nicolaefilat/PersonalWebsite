import fs from "fs";
import yaml from "js-yaml"
import Handlebars from "handlebars";

function build() {
    try {
        // Load YAML data
        const projectsData = yaml.load(
            fs.readFileSync("projects.yaml", "utf8"),
        );

        // Load HTML template
        const templateContent = fs.readFileSync("template.html", "utf8");
        const template = Handlebars.compile(templateContent);

        const listSectionPartial = fs.readFileSync("section.hbs", "utf8");
        Handlebars.registerPartial('skill_section', listSectionPartial);

        // Generate HTML by injecting data into the template
        const outputHtml = template(projectsData);

        // Write the output to a new HTML file
        fs.writeFileSync("output/index.html", outputHtml);
        console.log("index.html has been generated successfully!");
    } catch (error) {
        console.error("Error generating HTML:", error);
    }
}

build();

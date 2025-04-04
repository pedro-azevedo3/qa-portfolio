import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Bug,
  CheckCircle,
  Code,
  FileCode,
  Github,
  Linkedin,
  Mail,
  Microscope,
  PlayCircle,
  Smartphone,
  Terminal,
  TestTube,
  Workflow,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <TestTube className="mr-2 h-5 w-5 text-yellow-500" />
            <span>Pedro Azevedo | Qazeiro</span>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-yellow-500 transition-colors">
              About
            </a>
            <a href="#skills" className="text-white hover:text-yellow-500 transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-white hover:text-yellow-500 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-white hover:text-yellow-500 transition-colors">
              Projects
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pedro Azevedo <br />
            <span className="text-yellow-500">QA Engineer</span>
          </h1>
          <p className="text-xl text-white mb-6">
            Ensuring software excellence through meticulous testing, testing automation and quality processes.
          </p>
          <div className="flex space-x-4">
            <a href="#projects">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">View Projects</Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white-500 shadow-xl">
            <img src="/placeholder.png?height=320&width=320" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Passionate Quality Assurance <span className="text-yellow-500">Engineer</span>
              </h3>
              <p className="text-white mb-4">
                With over 2 years of experience in software testing and quality assurance, I specialize in ensuring
                that software products meet the highest standards of quality, reliability, and user experience.
              </p>
              <p className="text-white mb-4">
                My approach combines technical expertise with a deep understanding of user needs, allowing me to
                identify issues that might otherwise go unnoticed.
              </p>
              <p className="text-white">
                I'm passionate about continuous improvement and staying updated with the latest testing methodologies
                and tools to deliver exceptional results.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <Card className="border-yellow-500/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-black">
                    Professional <span className="text-yellow-500">Summary</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Expert in manual and automated testing methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Proficient in creating comprehensive test plans and strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Experienced in agile development environments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Strong analytical and problem-solving abilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Excellent communication and collaboration skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            My <span className="text-yellow-500">Skills</span>
          </h2>

          <Tabs defaultValue="testing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="testing">Testing</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="testing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Bug className="h-10 w-10 text-yellow-500" />}
                  title="Manual Testing"
                  skills={[
                    "Functional Testing",
                    "UI/UX Testing",
                    "Regression Testing",
                    "Exploratory Testing",
                    "User Acceptance Testing",
                  ]}
                />
                <SkillCard
                  icon={<Microscope className="h-10 w-10 text-yellow-500" />}
                  title="Test Analysis"
                  skills={[
                    "Requirements Analysis",
                    "Test Case Design",
                    "Defect Tracking",
                    "Root Cause Analysis",
                    "Test Metrics",
                  ]}
                />
                <SkillCard
                  icon={<Workflow className="h-10 w-10 text-yellow-500" />}
                  title="Testing Methodologies"
                  skills={["Agile Testing", "Waterfall Testing", "BDD", "TDD", "Shift-Left Testing"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="automation" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Code className="h-10 w-10 text-yellow-500" />}
                  title="Automation Frameworks"
                  skills={["Selenium", "Cypress", "Rest Assured", "TestNG"]}
                />
                <SkillCard
                  icon={<Terminal className="h-10 w-10 text-yellow-500" />}
                  title="Programming Languages"
                  skills={["Java", "Python", "JavaScript", "TypeScript"]}
                />
                <SkillCard
                  icon={<PlayCircle className="h-10 w-10 text-yellow-500" />}
                  title="CI/CD Integration"
                  skills={["Jenkins", "GitHub Actions", "Microsoft Bamboo"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard
                  icon={<FileCode className="h-10 w-10 text-yellow-500" />}
                  title="Test Management"
                  skills={["JIRA", "Zephyr"]}
                />
                <SkillCard
                  icon={<Bug className="h-10 w-10 text-yellow-500" />}
                  title="Bug Tracking"
                  skills={["JIRA", "GitHub Issues"]}
                />
                <SkillCard
                  icon={<Smartphone className="h-10 w-10 text-yellow-500" />}
                  title="Performance & Security"
                  skills={["JMeter", "K6"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="soft" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard
                  icon={<CheckCircle className="h-10 w-10 text-yellow-500" />}
                  title="Communication"
                  skills={[
                    "Technical Documentation",
                    "Stakeholder Communication",
                    "Team Collaboration",
                    "Presentation Skills",
                    "Knowledge Sharing",
                  ]}
                />
                <SkillCard
                  icon={<CheckCircle className="h-10 w-10 text-yellow-500" />}
                  title="Problem Solving"
                  skills={[
                    "Critical Thinking",
                    "Analytical Skills",
                    "Troubleshooting",
                    "Decision Making",
                    "Creative Solutions",
                  ]}
                />
                <SkillCard
                  icon={<CheckCircle className="h-10 w-10 text-yellow-500" />}
                  title="Project Skills"
                  skills={[
                    "Time Management",
                    "Prioritization",
                    "Adaptability",
                    "Attention to Detail",
                    "Process Improvement",
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Work <span className="text-yellow-500">Experience</span>
          </h2>

          <div className="space-y-8">
            <ExperienceCard
              title="QA Engineer"
              company="Act Digital - Bradesco Bank"
              period="May 2024 - April 2025"
              description="Lead the QA automation team in testing enterprise-level applications, implementing automated testing with Rest Assured and Cucumber, and improving quality processes."
              achievements={[
                "Reduced regression testing time by 60% through automation",
                "Implemented CI/CD pipeline integration for continuous testing",
                "Mentored manual QAs to QAs engineers and established best practices",
                "Collaborated with cross-functional teams to improve product quality",
              ]}
            />

            <ExperienceCard
              title="QA Engineer"
              company="Sabemos Tecnologia"
              period="November 2023 to Present"
              description="Responsible for manual and automated testing of front-end and back-end systems, creating test plans, and reporting defects."
              achievements={[
                "Developed and maintained test cases for local business applications",
                "Implemented Cypress test framework for web application testing",
                "Conducted performance testing for high-traffic applications",
              ]}
            />

            <ExperienceCard
              title="Programming Professor - Internship"
              company="Science, Innovation and Technology Secretary - Campina Grande City Hall"
              period="December 2023 - March 2024"
              description="Provided free training for people in software development and computer literacy."
              achievements={[
                "Developed the course material, covering topics such as Programming Logic with Java, basic Linux terminal commands",
                "Worked on maintaining a relational database with MySQL for internal services of the Secretary",
                "Although I no longer teach the course, the material I created is still used today, with the course being held semiannually, training people of all ages in the IT field"
              ]}
            />
            <ExperienceCard
              title="Back-end Developer - Internship"
              company="Video Streaming Inc"
              period="August 2023- December 2023"
              description="Developed a back-end system for a enterprise application"
              achievements={[
                "I worked as a back-end developer using the Flask framework to develop a CRUD system for receiving documents"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Bradesco Expresso"
              description="A service that enables commercial establishments such as lottery retailers, supermarkets, drugstores, and convenience stores to offer basic banking services to customers. "
              tags={["Rest Assured", "Cucumber", "API Testing", "JMeter", "Jira", "Manual Testing"]}
              image="/bradesco.svg?height=200&width=400"
            />

            <ProjectCard
              title="Fade Solution"
              description="CRM service for local barbershops in the city of Campina Grande."
              tags={["Cypress", "Rest Assured", "API Testing", "Front-end Testing", "Manual Testing"]}
              image="/fade.png?height=200&width=400"
            />

            <ProjectCard
              title="Show Me The Bugs"
              description="Software Testing Tool for quality professionals to assist with test versioning, creation of test cases, test suites, bug reports, and test results. Project still in"
              tags={["Manual Testing", "Automation Testing", "Cypress", "API Testing", "Front-end Testing"]}
              image="/SMTB.png?height=200&width=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Contact <span className="text-yellow-500">Information</span>
              </h3>
              <p className="text-white mb-6">
                Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>pedroazevedoteixeira7@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-yellow-500 mr-3" />
                  <a href="https://linkedin.com/in/pedroazevedoteixeira" className="hover:text-yellow-500 transition-colors">
                    linkedin.com/in/pedroazevedoteixeira
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-yellow-500 mr-3" />
                  <a href="https://github.com/pedro-azevedo3" className="hover:text-yellow-500 transition-colors">
                    github.com/pedro-azevedo3
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold flex items-center">
                <TestTube className="mr-2 h-5 w-5 text-yellow-500" />
                <span>QA Portfolio</span>
              </h3>
              <p className="mt-2 text-white">
                Quality Assurance <span className="text-yellow-500">Professional</span>
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="linkedin.com/in/pedroazevedoteixeira" className="text-white hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/pedro-azevedo3" className="text-white hover:text-yellow-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="pedroazevedoteixeira7@gmail.com" className="text-white hover:text-yellow-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white">
            <p>© {new Date().getFullYear()} Pedro Azevedo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Skill Card Component
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <Card className="overflow-hidden border-yellow-500/20 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold mt-3 text-black">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-yellow-500/10 text-black">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Experience Card Component
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

function ExperienceCard({ title, company, period, description, achievements }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden border-yellow-500/20 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-yellow-500">{company}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <Badge variant="outline" className="bg-yellow-500/10 text-black">
              {period}
            </Badge>
          </div>
        </div>
        <p className="text-black mb-4">{description}</p>
        <h4 className="font-medium mb-2 text-black">
          Key <span className="text-yellow-500">Achievements</span>:
        </h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-black">{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-yellow-500/20 hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-yellow-500/10 text-black">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

"use client";

import { Document, Page, Text, View } from "@react-pdf/renderer";
import type {
  Course,
  TranscriptDocumentProps,
  UniversityGradeMapping,
} from "@/app/_calculator/types";
import { resolveUniversity } from "@/app/_calculator/utils";

const formatNumber = (value: number, digits = 2) =>
  Number.isFinite(value) ? value.toFixed(digits) : "0.00";

const normalizeCourses = (
  courses: Course[],
  mapping: UniversityGradeMapping[],
) =>
  courses
    .map((course) => {
      const credits = Number(course.credits);
      const gradePoint = mapping.find(
        (gradeMapping) => gradeMapping.grade === course.grade,
      )?.gradePoints;
      const name = course.name.trim();

      if (
        !name ||
        !Number.isFinite(credits) ||
        typeof gradePoint !== "number" ||
        !Number.isFinite(gradePoint)
      ) {
        return null;
      }

      return {
        id: course.id,
        name,
        credits,
        grade: course.grade,
        points: credits * gradePoint,
      };
    })
    .filter((course): course is NonNullable<typeof course> => Boolean(course));

export function TranscriptDocument({
  university,
  courses,
  summary,
}: TranscriptDocumentProps) {
  const universityData = resolveUniversity(university);
  const rows = normalizeCourses(courses, universityData?.mapping ?? []);
  const schoolName = university.trim() || "University";

  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 24,
          fontSize: 11,
          fontFamily: "Helvetica",
          color: "#111827",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 6,
          }}
        >
          Transcript
        </Text>

        <Text
          style={{
            fontSize: 11,
            marginBottom: 16,
            color: "#6B7280",
          }}
        >
          {schoolName}
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 12,
            marginBottom: 6,
          }}
        >
          Courses
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E5E7EB",
            paddingVertical: 6,
            fontWeight: "bold",
          }}
        >
          <Text
            style={{
              flexGrow: 1,
            }}
          >
            Course
          </Text>

          <Text
            style={{
              width: 70,
              textAlign: "right",
            }}
          >
            Credits
          </Text>

          <Text
            style={{
              width: 70,
              textAlign: "right",
            }}
          >
            Grade
          </Text>

          <Text
            style={{
              width: 70,
              textAlign: "right",
            }}
          >
            Points
          </Text>
        </View>

        {rows.length === 0 ? (
          <Text
            style={{
              color: "#9CA3AF",
              marginTop: 6,
            }}
          >
            No course data entered yet.
          </Text>
        ) : (
          rows.map((course) => (
            <View
              key={course.id}
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#F3F4F6",
                paddingVertical: 6,
              }}
            >
              <Text
                style={{
                  flexGrow: 1,
                }}
              >
                {course.name}
              </Text>

              <Text
                style={{
                  width: 70,
                  textAlign: "right",
                }}
              >
                {course.credits}
              </Text>

              <Text
                style={{
                  width: 70,
                  textAlign: "right",
                }}
              >
                {course.grade}
              </Text>

              <Text
                style={{
                  width: 70,
                  textAlign: "right",
                }}
              >
                {formatNumber(course.points)}
              </Text>
            </View>
          ))
        )}

        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 12,
            marginBottom: 6,
          }}
        >
          Summary
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
            }}
          >
            Total Credits
          </Text>

          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {formatNumber(summary.credits)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
            }}
          >
            Total Points
          </Text>

          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {formatNumber(summary.gradePoints)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
            }}
          >
            GPA
          </Text>

          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {formatNumber(summary.gpa)}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

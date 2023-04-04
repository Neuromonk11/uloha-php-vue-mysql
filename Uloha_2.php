<?php
    public static function efficientMethod($user_id) {
        $all_certificates = [];
        $user = User::findOrFail($user_id);
        $author_courses = Course::where('active', 1)
            ->where('author', $user->id)
            ->get();

        foreach ($author_courses as $course) {
            $all_certificates[] = $course->certificate;
            if (strpos($course->certificate, 'php') !== false) {
                // do something with php certificate
            }
        }
    }
?>
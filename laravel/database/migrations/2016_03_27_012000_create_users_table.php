<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Users', function(Blueprint $table){
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('userType');
            $table->string('password');
            $table->string('CoursesCompleted');
            $table->string('RemainingCourses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('Users');
    }
}
